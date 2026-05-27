// src/components/RegistrationForm.jsx
import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function RegistrationForm() {
    const navigate = useNavigate();

    // Khởi tạo state cho form
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    // Khởi tạo state lưu trữ lỗi
    const [errors, setErrors] = useState({});

    // State theo dõi xem form đã được submit lần nào chưa để hiển thị validate real-time
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Hàm xử lý thay đổi ô nhập liệu
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));

        // Nếu đã submit, thực hiện validate ngay khi người dùng gõ phím
        if (isSubmitted) {
            validateField(name, value);
        }
    };

    // Hàm kiểm tra lỗi của từng trường riêng lẻ
    const validateField = (name, value) => {
        let fieldError = '';

        if (!value || value.trim() === '') {
            fieldError = 'Vui lòng điền thông tin vào trường này.';
        } else {
            if (name === 'email') {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) {
                    fieldError = 'Email không đúng định dạng (Ví dụ: abc@example.com).';
                }
            } else if (name === 'password') {
                if (value.length < 6) {
                    fieldError = 'Mật khẩu phải có từ 6 ký tự trở lên.';
                } else {
                    const hasUppercase = /[A-Z]/.test(value);
                    const hasLowercase = /[a-z]/.test(value);
                    const hasNumber = /[0-9]/.test(value);
                    const hasSpecialChar = /[!@#$%^&*()_+={}[\]|\\:;"'<>,.?/~`-]/.test(value);
                    
                    if (!hasUppercase || !hasLowercase || !hasNumber || !hasSpecialChar) {
                        fieldError = 'Mật khẩu phải chứa ít nhất 1 chữ hoa, 1 chữ thường, 1 chữ số và 1 ký tự đặc biệt.';
                    }
                }
            } else if (name === 'confirmPassword') {
                if (value !== formData.password) {
                    fieldError = 'Mật khẩu xác nhận không khớp.';
                }
            }
        }

        setErrors((prev) => ({
            ...prev,
            [name]: fieldError
        }));

        return fieldError;
    };

    // Hàm kiểm tra toàn bộ form trước khi submit
    const validateForm = () => {
        const tempErrors = {};
        let isValid = true;

        // Kiểm tra username
        if (!formData.username || formData.username.trim() === '') {
            tempErrors.username = 'Vui lòng nhập tên người dùng.';
            isValid = false;
        }

        // Kiểm tra email
        if (!formData.email || formData.email.trim() === '') {
            tempErrors.email = 'Vui lòng nhập email.';
            isValid = false;
        } else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                tempErrors.email = 'Email không đúng định dạng (Ví dụ: abc@example.com).';
                isValid = false;
            }
        }

        // Kiểm tra password
        if (!formData.password || formData.password.trim() === '') {
            tempErrors.password = 'Vui lòng nhập mật khẩu.';
            isValid = false;
        } else {
            if (formData.password.length < 6) {
                tempErrors.password = 'Mật khẩu phải có từ 6 ký tự trở lên.';
                isValid = false;
            } else {
                const hasUppercase = /[A-Z]/.test(formData.password);
                const hasLowercase = /[a-z]/.test(formData.password);
                const hasNumber = /[0-9]/.test(formData.password);
                const hasSpecialChar = /[!@#$%^&*()_+={}[\]|\\:;"'<>,.?/~`-]/.test(formData.password);

                if (!hasUppercase || !hasLowercase || !hasNumber || !hasSpecialChar) {
                    tempErrors.password = 'Mật khẩu phải chứa ít nhất 1 chữ hoa, 1 chữ thường, 1 chữ số và 1 ký tự đặc biệt.';
                    isValid = false;
                }
            }
        }

        // Kiểm tra confirmPassword
        if (!formData.confirmPassword || formData.confirmPassword.trim() === '') {
            tempErrors.confirmPassword = 'Vui lòng nhập lại mật khẩu xác nhận.';
            isValid = false;
        } else if (formData.confirmPassword !== formData.password) {
            tempErrors.confirmPassword = 'Mật khẩu xác nhận không khớp.';
            isValid = false;
        }

        setErrors(tempErrors);
        return isValid;
    };

    // Hàm xử lý khi submit form
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);

        const isValid = validateForm();
        if (isValid) {
            // Giả lập đăng ký thành công
            console.log('Đăng ký thành công với dữ liệu:', formData);
            // Chuyển hướng về trang chủ blog
            navigate('/');
        }
    };

    // Hàm xử lý nút Cancel
    const handleCancel = () => {
        // Chuyển hướng về trang chủ blog
        navigate('/');
    };

    return (
        <Container className="py-5">
            <Row className="justify-content-center">
                <Col md={6}>
                    <Card className="shadow-lg border-0 rounded-3">
                        <Card.Body className="p-5">
                            <h2 className="text-center mb-4 fw-bold text-primary">📝 Đăng ký tài khoản</h2>
                            <Form onSubmit={handleSubmit} noValidate>
                                
                                {/* Username */}
                                <Form.Group className="mb-3" controlId="formUsername">
                                    <Form.Label className="fw-semibold">Tên đăng nhập (Username)</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="username"
                                        value={formData.username}
                                        onChange={handleChange}
                                        placeholder="Nhập tên đăng nhập"
                                        isInvalid={!!errors.username}
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.username}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                {/* Email */}
                                <Form.Group className="mb-3" controlId="formEmail">
                                    <Form.Label className="fw-semibold">Địa chỉ Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Nhập địa chỉ email"
                                        isInvalid={!!errors.email}
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.email}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                {/* Password */}
                                <Form.Group className="mb-3" controlId="formPassword">
                                    <Form.Label className="fw-semibold">Mật khẩu</Form.Label>
                                    <Form.Control
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder="Nhập mật khẩu"
                                        isInvalid={!!errors.password}
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.password}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                {/* Confirm Password */}
                                <Form.Group className="mb-4" controlId="formConfirmPassword">
                                    <Form.Label className="fw-semibold">Xác nhận mật khẩu</Form.Label>
                                    <Form.Control
                                        type="password"
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        placeholder="Nhập lại mật khẩu"
                                        isInvalid={!!errors.confirmPassword}
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.confirmPassword}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                {/* Buttons */}
                                <div className="d-flex gap-3 justify-content-end">
                                    <Button 
                                        variant="secondary" 
                                        type="button" 
                                        onClick={handleCancel}
                                        className="px-4"
                                    >
                                        Cancel
                                    </Button>
                                    <Button 
                                        variant="primary" 
                                        type="submit"
                                        className="px-4"
                                    >
                                        Register
                                    </Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default RegistrationForm;
